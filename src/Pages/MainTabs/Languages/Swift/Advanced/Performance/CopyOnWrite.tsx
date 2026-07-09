import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CopyOnWrite = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Performance/CopyOnWrite';

  return (
    <>
      <PageLayout>
        <PageTitle title="Copy-on-Write" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CopyOnWrite;
