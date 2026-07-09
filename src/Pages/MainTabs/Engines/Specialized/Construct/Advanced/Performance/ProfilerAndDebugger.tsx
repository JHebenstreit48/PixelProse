import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
