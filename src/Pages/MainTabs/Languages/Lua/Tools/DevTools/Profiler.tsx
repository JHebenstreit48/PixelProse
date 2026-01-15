import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Profiler = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/Profiler';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Profiler;
