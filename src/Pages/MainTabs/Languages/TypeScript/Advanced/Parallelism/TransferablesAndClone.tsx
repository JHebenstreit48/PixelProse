import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TransferablesAndClone = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/Parallelism/TransferablesAndClone';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Transferables & Clone" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransferablesAndClone;
