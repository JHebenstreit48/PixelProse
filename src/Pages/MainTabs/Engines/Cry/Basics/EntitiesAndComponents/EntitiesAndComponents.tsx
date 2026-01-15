import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EntitiesAndComponents = () => {
  const markdownFilePath = 'Engines/Cry/Basics/EntitiesAndComponents/EntitiesAndComponents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Entities & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntitiesAndComponents;
