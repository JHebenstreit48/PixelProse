import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
