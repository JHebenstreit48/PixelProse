import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
