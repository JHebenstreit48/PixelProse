import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
