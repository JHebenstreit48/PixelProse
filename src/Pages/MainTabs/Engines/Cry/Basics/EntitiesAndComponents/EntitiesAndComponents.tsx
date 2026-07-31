import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const EntitiesAndComponents = () => {
  const markdownFilePath = 'Engines/Cry/Basics/EntitiesAndComponents/EntitiesAndComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Entities & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntitiesAndComponents;
