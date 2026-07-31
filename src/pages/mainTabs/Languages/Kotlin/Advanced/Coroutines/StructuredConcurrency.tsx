import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const StructuredConcurrency = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Coroutines/StructuredConcurrency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Structured Concurrency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructuredConcurrency;
