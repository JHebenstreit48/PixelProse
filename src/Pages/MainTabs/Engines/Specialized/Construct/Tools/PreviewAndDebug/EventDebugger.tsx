import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventDebugger = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Tools/PreviewAndDebug/EventDebugger';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event Debugger" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventDebugger;
