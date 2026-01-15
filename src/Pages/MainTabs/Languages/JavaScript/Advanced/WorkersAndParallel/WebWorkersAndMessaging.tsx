import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebWorkersAndMessaging = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/WorkersAndParallel/WebWorkersAndMessaging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Web Workers & Messaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebWorkersAndMessaging;
