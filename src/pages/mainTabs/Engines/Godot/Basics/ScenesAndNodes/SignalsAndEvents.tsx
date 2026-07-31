import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
