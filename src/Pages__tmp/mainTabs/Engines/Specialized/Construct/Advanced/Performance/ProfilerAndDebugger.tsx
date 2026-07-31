import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
