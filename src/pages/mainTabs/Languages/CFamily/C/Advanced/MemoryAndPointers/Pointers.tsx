import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
