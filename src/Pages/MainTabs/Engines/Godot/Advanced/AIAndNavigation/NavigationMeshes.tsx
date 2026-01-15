import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavigationMeshes = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/AIAndNavigation/NavigationMeshes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Navigation Meshes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavigationMeshes;
