import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const NavigationMeshes = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/AIAndNavigation/NavigationMeshes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Navigation Meshes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavigationMeshes;
