import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SignalsAndEvents = () => {
  const markdownFilePath = 'Engines/Godot/Basics/ScenesAndNodes/SignalsAndEvents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Signals & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SignalsAndEvents;
