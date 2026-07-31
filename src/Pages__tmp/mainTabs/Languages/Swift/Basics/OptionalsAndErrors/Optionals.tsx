import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Optionals = () => {
  const markdownFilePath = 'Languages/Swift/Basics/OptionalsAndErrors/Optionals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optionals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optionals;
