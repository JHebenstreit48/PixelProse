import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CoroutinePatterns = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Coroutines/CoroutinePatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coroutine Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoroutinePatterns;
