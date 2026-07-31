import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebWorkersAndMessaging = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/WorkersAndParallel/WebWorkersAndMessaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Web Workers & Messaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebWorkersAndMessaging;
