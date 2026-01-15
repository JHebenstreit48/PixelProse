import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TraitObjectsAndAssocTypes = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/LifetimesAndTypes/TraitObjectsAndAssocTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Trait Objects & Assoc Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TraitObjectsAndAssocTypes;
