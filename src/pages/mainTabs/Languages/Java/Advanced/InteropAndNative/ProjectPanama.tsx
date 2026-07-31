import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
