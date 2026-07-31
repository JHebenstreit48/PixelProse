import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
