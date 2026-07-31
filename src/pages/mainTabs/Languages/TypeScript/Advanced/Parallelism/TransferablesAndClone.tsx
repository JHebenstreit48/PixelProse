import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TransferablesAndClone = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/Parallelism/TransferablesAndClone';

  return (
    <>
      <PageLayout>
        <PageTitle title="Transferables & Clone" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransferablesAndClone;
