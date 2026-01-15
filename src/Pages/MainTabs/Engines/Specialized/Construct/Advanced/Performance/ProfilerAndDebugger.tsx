import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilerAndDebugger = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Performance/ProfilerAndDebugger';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiler & Debugger" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerAndDebugger;
