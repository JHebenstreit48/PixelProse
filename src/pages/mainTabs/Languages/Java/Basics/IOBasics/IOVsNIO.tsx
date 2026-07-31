import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
