import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
