import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActionsAndEvents = () => {
  const markdownFilePath = 'Engines/Cry/Basics/UI/ActionsAndEvents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Actions & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionsAndEvents;
