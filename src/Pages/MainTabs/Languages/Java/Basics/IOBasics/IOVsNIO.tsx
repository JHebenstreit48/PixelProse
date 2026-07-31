import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const IOVsNIO = () => {
  const markdownFilePath = 'Languages/Java/Basics/IOBasics/IOVsNIO';

  return (
    <>
      <PageLayout>
        <PageTitle title="IO vs NIO" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOVsNIO;
