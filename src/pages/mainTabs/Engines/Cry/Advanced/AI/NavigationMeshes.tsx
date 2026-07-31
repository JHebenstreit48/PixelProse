import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
