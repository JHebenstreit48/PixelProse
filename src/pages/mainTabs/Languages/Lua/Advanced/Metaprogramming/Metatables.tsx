import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Metatables = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metatables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metatables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metatables;
