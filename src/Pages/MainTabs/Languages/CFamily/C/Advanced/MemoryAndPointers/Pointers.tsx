import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pointers = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/MemoryAndPointers/Pointers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pointers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pointers;
