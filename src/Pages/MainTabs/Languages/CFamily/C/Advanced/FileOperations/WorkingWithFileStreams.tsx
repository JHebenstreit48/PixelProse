import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkingWithFileStreams = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/FileOperations/WorkingWithFileStreams';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Working with File Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithFileStreams;
