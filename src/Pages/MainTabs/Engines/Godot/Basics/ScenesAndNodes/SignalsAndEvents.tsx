import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SignalsAndEvents = () => {
  const markdownFilePath = 'Engines/Godot/Basics/ScenesAndNodes/SignalsAndEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Signals & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SignalsAndEvents;
