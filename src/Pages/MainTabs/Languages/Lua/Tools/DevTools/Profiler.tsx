import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Profiler = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/Profiler';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Profiler;
