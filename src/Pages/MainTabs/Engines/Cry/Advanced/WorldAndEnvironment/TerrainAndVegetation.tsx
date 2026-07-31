import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TerrainAndVegetation = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/WorldAndEnvironment/TerrainAndVegetation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Terrain & Vegetation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TerrainAndVegetation;
