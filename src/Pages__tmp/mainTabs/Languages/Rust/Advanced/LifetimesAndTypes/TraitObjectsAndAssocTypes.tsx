import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TraitObjectsAndAssocTypes = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/LifetimesAndTypes/TraitObjectsAndAssocTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Trait Objects & Assoc Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TraitObjectsAndAssocTypes;
