import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
