import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
