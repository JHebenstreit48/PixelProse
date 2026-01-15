import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StructuredConcurrency = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Coroutines/StructuredConcurrency';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Structured Concurrency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructuredConcurrency;
