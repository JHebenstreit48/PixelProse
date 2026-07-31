import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Pointers = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/MemoryAndPointers/Pointers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pointers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pointers;
