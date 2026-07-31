import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ActionsAndEvents = () => {
  const markdownFilePath = 'Engines/Cry/Basics/UI/ActionsAndEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actions & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionsAndEvents;
