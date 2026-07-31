import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
