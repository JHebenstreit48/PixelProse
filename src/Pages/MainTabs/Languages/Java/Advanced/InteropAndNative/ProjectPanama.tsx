import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectPanama = () => {
  const markdownFilePath = 'Languages/Java/Advanced/InteropAndNative/ProjectPanama';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Panama (FFI)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectPanama;
