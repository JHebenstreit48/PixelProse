import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WorkingWithFileStreams = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/FileOperations/WorkingWithFileStreams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Working with File Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithFileStreams;
