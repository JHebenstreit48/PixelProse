import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilerAndDebugger = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Performance/ProfilerAndDebugger';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiler & Debugger" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerAndDebugger;
