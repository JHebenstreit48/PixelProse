import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoroutinePatterns = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Coroutines/CoroutinePatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Coroutine Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoroutinePatterns;
