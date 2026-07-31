import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
