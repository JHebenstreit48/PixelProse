import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IOVsNIO = () => {
  const markdownFilePath = 'Languages/Java/Basics/IOBasics/IOVsNIO';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IO vs NIO" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOVsNIO;
