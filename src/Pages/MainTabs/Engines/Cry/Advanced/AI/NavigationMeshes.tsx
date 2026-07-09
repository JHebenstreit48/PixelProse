import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavigationMeshes = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/AI/NavigationMeshes';

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
