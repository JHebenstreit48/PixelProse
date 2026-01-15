import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TerrainAndVegetation = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/WorldAndEnvironment/TerrainAndVegetation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Terrain & Vegetation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TerrainAndVegetation;
