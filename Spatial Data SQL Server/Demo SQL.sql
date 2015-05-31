-- Single point
select geography::Point(10, 10, 4326)




-- Polygon
select geography::STGeomFromText('POLYGON((-122.358 47.653 , -122.348 47.649, -122.348 47.658, -122.358 47.658, -122.358 47.653))', 4326);





-- US States as polygons
select Shape from USStates






-- Check the units of measurement
SELECT spatial_reference_id
   , well_known_text
   , unit_of_measure
   , unit_conversion_factor
FROM sys.spatial_reference_systems







-- STDistance
DECLARE @sanDiego geography = geography::Point(32.7225,-117.1472, 4326); 
DECLARE @sweden geography = geography::Point(68.75231, 20.9179, 4326);

print (@sanDiego.STDistance(@sweden) / 1000);




-- STArea
select 
	NAME10 as [State], 
	Shape, 
	Shape.STArea() as AreaInSquareMeters,
	(Shape.STArea() / 1000000) as AreaInSquareKm,
	Shape.STSrid
from USStates







-- STBuffer, Filter, STIntersects
DECLARE @sanDiego geography = geography::Point(32.7225,-117.1472, 4326);
DECLARE @sanDiegoRegion geography = @sanDiego.STBuffer(2000);

select *
from [dbo].[CaliforniaTracts]
where Shape.Filter(@sanDiegoRegion) = 1;







-- What is the population per tract?
DECLARE @sanDiego geography = geography::Point(32.7225,-117.1472, 4326);
DECLARE @sanDiegoRegion geography = @sanDiego.STBuffer(2000);

select Shape, '' as DisplayName, 0 as [TotalPopulation], 0 as [Total Households] from USStates where STATEFP10 = '06'
UNION ALL
select ct.Shape, td.DisplayName, td.[TotalPopulation], td.[Total Households]
from [dbo].[CaliforniaTracts] ct
left join [dbo].[TractDetails] td on td.GEOID = ct.GEOID10
where ct.Shape.STIntersects(@sanDiegoRegion) = 1





-- Clustered Index
IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[CaliforniaTracts]') AND name = N'IX_TractDetails_Shape')
DROP INDEX [IX_TractDetails_Shape] ON [dbo].[CaliforniaTracts]
GO

CREATE SPATIAL INDEX [IX_TractDetails_Shape] ON [dbo].[CaliforniaTracts] 
(
	[Shape]
)USING  GEOGRAPHY_GRID 
WITH (
GRIDS =(LEVEL_1 = HIGH,LEVEL_2 = HIGH,LEVEL_3 = HIGH,LEVEL_4 = HIGH), 
CELLS_PER_OBJECT = 16, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON)
GO





-- Tuning
declare @qs geography;
SET @qs =geography::Point(32.7225,-117.1472, 4326).STBuffer(2000);
exec sp_help_spatial_geography_index 'CaliforniaTracts', 'IX_TractDetails_Shape', 1, @qs;



declare @qs geography;
SET @qs =geography::Point(32.7225,-117.1472, 4326).STBuffer(2000);
exec sp_help_spatial_geography_index 'CaliforniaBlocks', 'geog_sidx', 1, @qs;

